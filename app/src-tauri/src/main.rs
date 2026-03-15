// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::env;
use std::path::Path;
use std::process;

fn main() {
    let args: Vec<String> = env::args().collect();

     if args.iter().any(|arg| arg == "-cfg") {
        eprintln!("Error: use --cfg (double dash) instead of -cfg.");
        process::exit(1);
    }

    if let Some(pos) = args.iter().position(|arg| arg == "--cfg") {
        if args.get(pos + 1).map_or(true, |v| v.is_empty()) {
            eprintln!("Error: no value provided for --cfg argument.");
            process::exit(1);
        }
    }

    if let Some(pos) = args.iter().position(|arg| arg == "-path") {
        if let Some(custom_path) = args.get(pos + 1) {
            let path = Path::new(custom_path);

            if !custom_path.is_empty() {
                env::set_var("WEBVIEW2_USER_DATA_FOLDER", custom_path);
            }
        }
    }

    app_lib::run();
}
