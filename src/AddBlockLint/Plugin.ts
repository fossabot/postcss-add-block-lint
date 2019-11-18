import PostCSS from "postcss";

import { PLUGIN_NAME } from "./Constants";
import Rules from "./Rules";
import Report from "./Report";

export interface PluginOptions {
  easyList: any;
}

export default class Plugin {
  prepare(): PostCSS.Plugin<any> {
    // @ts-ignore
    return PostCSS.plugin(PLUGIN_NAME, (options: PluginOptions) => {
      // Overwrite defaults with user defined options.
      options = Object.assign({ easyList: null }, options);

      const rules = new Rules();

      // Parse rules from file.
      rules.populateFromFile(options.easyList);

      // Root (postcss/lib/root.js)
      return (css: { walkRules: (arg0: (cssRule: any) => void) => void }) => {
        const report = new Report();

        // Rule (postcss/lib/rule.js)
        css.walkRules((cssRule: any) => {
          const comparison = rules.compare(cssRule);

          if (comparison.matched()) {
            report.contribute(comparison);
          }
        });

        report.display();

        if (report.failed()) {
          throw new Error("Add Block Lint");
        }
      };
    });
  }
}
