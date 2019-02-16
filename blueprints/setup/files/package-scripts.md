
"dev": "ember server",
"deploy:prod": "ember deploy production",
"fastboot:build": "ember build --environment production",
"fastboot:build:dev": "ember build --environment development",
"fastboot:copy": "rm -rf ../api/fastboot-dist && mkdir ../api/fastboot-dist && cp -rf dist/** ../api/fastboot-dist",
"fastboot:copy:deploy-dist": "rm -rf ../api/fastboot-dist && mkdir ../api/fastboot-dist && cp -rf tmp/deploy-dist/** ../api/fastboot-dist",
"prod": "yarn deploy:prod && yarn fastboot:build && yarn fastboot:copy",
"storybook:prod": "yarn storybook:dist && storybook:upload",
"storybook:dist": "ember build && build-storybook  -c .storybook -o .out -s dist",
"storybook:upload": "aws --profile prodtype-prod s3 sync --acl public-read .out s3://<bucket-name>",
"storybook:dev": "start-storybook -p 9001 -s dist"
