{
    "src_folders" : ["tests"],
    "page_objects_path" : ["page-objects"],
    "output_folder" : "reports",
  
    "selenium" : {
      "start_process" : true,
      "server_path" : "bin/selenium-server-standalone-3.141.59.jar",
      "log_path" : "",
      "port" : 4444,
  
      "cli_args" : {
        "webdriver.chrome.driver" : "bin/chromedriver"
      }
    },
  
    "test_settings" : {
      "default" : {
        "launch_url" : "http://localhost",
        "selenium_port"  : 4444,
        "selenium_host"  : "localhost",
        "silent": true,
  
        "screenshots" : {
          "enabled" : false,
          "path" : ""
        },
  
        "desiredCapabilities": {
          "browserName": "chrome"
        }
      }
    }
  }
  