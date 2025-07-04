import fs from "fs";

export function get_build_dir() {
    let cwd = process.cwd();

    let build_path = `${cwd}/build`;
    let build_dirs = fs.readdirSync(build_path);
    let build_dir = build_dirs[0];
    return `${build_path}/${build_dir}`;
}