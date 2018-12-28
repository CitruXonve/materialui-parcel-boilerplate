module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
      },
    "settings": {
        "import/resolver":{
            "node": {
                "extensions": [
                  ".js",
                  ".jsx"
                ]
              }
        },
      "import/core-modules": ["react","react-dom"]
    }
};