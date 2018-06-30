# Google Page Speed Insights API Node.js

With this sample repo you will learn how to work with Google PageSpeed Insights API Node.JS

# Google APIs
You can get detailed information about Google Page Speed API here: https://developers.google.com/speed/docs/insights/v4/getting-started

## Getting started
### Installation
```sh
$ npm install
$ bower install
```
### Customize
Write your Google API Key here.
If there is no Api Key, create API key in this url:
  https://console.cloud.google.com/apis/credentials 
```sh
const API_KEY = 'YOUR_API_KEY';
```
Write url that took from client for crawling

```sh
const url = 'URL';
```

### Test Request
Send a request to make sure everything is ok
```sh
http://localhost:3000/api/v1/page-speed
```
If everything is OK, it returns a json data like the following.

### Example JSON Result

```sh
{
    "captchaResult": "CAPTCHA_NOT_NEEDED",
    "kind": "pagespeedonline#result",
    "id": "https://github.com/",
    "responseCode": 200,
    "title": "The world’s leading software development platform · GitHub",
    "ruleGroups": {
        "SPEED": {
            "score": 45
        }
    },
    "loadingExperience": {
        "id": "https://github.com/",
        "metrics": {
            "FIRST_CONTENTFUL_PAINT_MS": {
                "median": 1333,
                "distributions": [
                    {
                        "min": 0,
                        "max": 984,
                        "proportion": 0.31275891777877657
                    },
                    {
                        "min": 984,
                        "max": 2073,
                        "proportion": 0.46647118656353626
                    },
                    {
                        "min": 2073,
                        "proportion": 0.22076989565768718
                    }
                ],
                "category": "AVERAGE"
            },
            "DOM_CONTENT_LOADED_EVENT_FIRED_MS": {
                "median": 1263,
                "distributions": [
                    {
                        "min": 0,
                        "max": 1366,
                        "proportion": 0.5516464364118775
                    },
                    {
                        "min": 1366,
                        "max": 2787,
                        "proportion": 0.3384036515480095
                    },
                    {
                        "min": 2787,
                        "proportion": 0.1099499120401131
                    }
                ],
                "category": "FAST"
            }
        },
        "overall_category": "AVERAGE",
        "initial_url": "https://github.com/"
    },
    "pageStats": {
        "numberResources": 52,
        "numberHosts": 9,
        "totalRequestBytes": "6297",
        "numberStaticResources": 44,
        "htmlResponseBytes": "61541",
        "overTheWireResponseBytes": "2035584",
        "cssResponseBytes": "567104",
        "imageResponseBytes": "1713380",
        "javascriptResponseBytes": "797787",
        "otherResponseBytes": "2512",
        "numberJsResources": 4,
        "numberCssResources": 3,
        "numTotalRoundTrips": 16,
        "numRenderBlockingRoundTrips": 6
    },
    "formattedResults": {
        "locale": "en_US",
        "ruleResults": {
            "AvoidLandingPageRedirects": {
                "localizedRuleName": "Avoid landing page redirects",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Your page has no redirects. Learn more about {{BEGIN_LINK}}avoiding landing page redirects{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/AvoidRedirects"
                        }
                    ]
                }
            },
            "EnableGzipCompression": {
                "localizedRuleName": "Enable compression",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "You have compression enabled. Learn more about {{BEGIN_LINK}}enabling compression{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/EnableCompression"
                        }
                    ]
                }
            },
            "LeverageBrowserCaching": {
                "localizedRuleName": "Leverage browser caching",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "You have enabled browser caching. Learn more about {{BEGIN_LINK}}browser caching recommendations{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/LeverageBrowserCaching"
                        }
                    ]
                }
            },
            "MainResourceServerResponseTime": {
                "localizedRuleName": "Reduce server response time",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Your server responded quickly. Learn more about {{BEGIN_LINK}}server response time optimization{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/Server"
                        }
                    ]
                }
            },
            "MinifyCss": {
                "localizedRuleName": "Minify CSS",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Your CSS is minified. Learn more about {{BEGIN_LINK}}minifying CSS{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                        }
                    ]
                }
            },
            "MinifyHTML": {
                "localizedRuleName": "Minify HTML",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Your HTML is minified. Learn more about {{BEGIN_LINK}}minifying HTML{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                        }
                    ]
                }
            },
            "MinifyJavaScript": {
                "localizedRuleName": "Minify JavaScript",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Your JavaScript content is minified. Learn more about {{BEGIN_LINK}}minifying JavaScript{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                        }
                    ]
                }
            },
            "MinimizeRenderBlockingResources": {
                "localizedRuleName": "Eliminate render-blocking JavaScript and CSS in above-the-fold content",
                "ruleImpact": 12,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Your page has {{NUM_CSS}} blocking CSS resources. This causes a delay in rendering your page.",
                    "args": [
                        {
                            "type": "INT_LITERAL",
                            "key": "NUM_CSS",
                            "value": "4"
                        }
                    ]
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML."
                        }
                    },
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Optimize CSS Delivery{{END_LINK}} of the following:",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/assets/frameworks-73f533b7cc08a9d040e601cfd38fa585.css"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/assets/github-a0a727fb61e0eacfb1f33d2f365272f8.css"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/assets/site-14cf418638c848dd5bbac72b6f77dfa2.css"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/assets/site-14cf418638c848dd5bbac72b6f77dfa2.css"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "OptimizeImages": {
                "localizedRuleName": "Optimize images",
                "ruleImpact": 122.5891,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Properly formatting and compressing images can save many bytes of data."
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Optimize the following images{{END_LINK}} to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/OptimizeImages"
                                },
                                {
                                    "type": "BYTES",
                                    "key": "SIZE_IN_BYTES",
                                    "value": "1.2MiB"
                                },
                                {
                                    "type": "PERCENTAGE",
                                    "key": "PERCENTAGE",
                                    "value": "82%"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/stories/customers/mailchimp.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "304.2KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "82%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/stories/customers/mapbox.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "264KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "81%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/home-illo-business.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "116.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "71%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/stories/developers/freakboy3742.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "97KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "80%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/integrators/codeclimate.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "74KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "98%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/integrators/circleci.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "62.3KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "97%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/integrators/slackhq.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "30.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "90%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/stories/developers/yyx990803.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "27.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "82%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/stories/developers/kris-nova.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "23.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "83%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/paypal-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "21.2KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "87%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/swift-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "18.1KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "89%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/node-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "17.9KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "86%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/airbnb-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "17.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "86%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/bloomberg-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "16.6KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "88%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/walmart-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "16.3KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "86%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/spotify-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "15.8KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "83%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/nasa-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "13.7KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "81%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/integrators/travis-ci.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "12KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "73%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/sap-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "10.8KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "85%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/stories/developers/jessfraz.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "10.1KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "74%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/integrators/atom.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "7.2KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "82%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/integrators/codeship.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "7KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "76%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/ibm-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "6.7KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "81%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/google-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "5.1KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "71%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://assets-cdn.github.com/images/modules/site/logos/facebook-logo.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "918B"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "62%"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "PrioritizeVisibleContent": {
                "localizedRuleName": "Prioritize visible content",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "You have the above-the-fold content properly prioritized. Learn more about {{BEGIN_LINK}}prioritizing visible content{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent"
                        }
                    ]
                }
            }
        }
    },
    "version": {
        "major": 1,
        "minor": 15
    }
}
```


