import { get_build_dir } from './utils';
import fs from "fs";

let cwd = process.cwd();

let sync_files = ["package.json", ".npmignore"];

function syncPackageJson() {
    console.log("run packages");
    console.log(cwd);
 
    let ghscripts_path = `${cwd}/ghscripts`;

    let build_dir = get_build_dir();

    sync_files.forEach(function(name) {
        let from = `${ghscripts_path}/${name}`;
        let to = `${build_dir}/${name}`;

        console.log(`copy ${from} to ${to}`);
        
        fs.copyFileSync(from ,to);
    });
}

syncPackageJson();