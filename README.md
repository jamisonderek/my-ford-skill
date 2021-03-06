# My-Ford-Skill

## Introduction
This package is an **Alexa skill** that forwards all vehicle requests to the my-ford service for processing.  Please see the [my-ford-service repo](https://www.github.com/jamisonderek/my-ford-service) for additional directions about 
running the my-ford service.


## Updating your domain
If you are running my-ford-service locally you can use [ngrok](https://dashboard.ngrok.com/get-started/setup) to expose your localhost
address on the internet.  Install ngrok then run:
```
ngrok http 8000
```
Ngrok will display a bunch of information. You will see a Forwarding https address like "https://f00d0bad0042.ngrok.io" which is your domain.<p>
**NOTE:** This domain will change everytime you reset ngrok if you are on the free plan, which means
you will need to update and redeploy this skill.

Update the [.lambda\settings.js](./lambda/settings.js) file to have your domain for the my-ford service.  
```
exports.domain = 'https://f00d0bad0042.ngrok.io';
```

## Updating for your Alexa instance
To start with, you should follow the steps for [ask-cli](https://github.com/alexa/ask-cli#getting-started).  When you get to step 3, "Create new skill project" where you run **ask new** please use the following values:
- choose NodeJS
- choose AWS Lambda
- choose Hello World (first option)
- type a skill name (like "my-ford-skill-demo")
- press enter to accept the default folder name.

Follow the remaining steps in the ask-cli tutorial to confirm you can deploy the new skill you created.

Now you should be ready to [deploy an update](#deploying-updates) with the my-ford-skill.

## Deploying updates
From the root of the project run the following command:
```
ask deploy
```


## Testing on Alexa
- Say "Alexa, open My Ford."
- Then say "Unlock the doors."
- Or you can say "Alexa, Unlock the doors using My Ford."
- To see other supported commands see [.\skill-package\interactionModels\custom\en-US.json](./skill-package/interactionModels/custom/en-US.json)