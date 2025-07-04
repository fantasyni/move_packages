import { get_build_dir } from './utils';
import fs from "fs";

let cwd = process.cwd();

function syncPackageJson() {
    console.log("run packages");
    console.log(cwd);
 
    let ghscripts_path = `${cwd}/ghscripts`;

    let build_dir = get_build_dir();

    fs.copyFileSync(`${ghscripts_path}/package.json`, `${build_dir}/package.json`);
}

syncPackageJson();