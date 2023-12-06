---
name: "staticresource"
root: "."
output: "**/*"
ignore: []
questions:
  resourceName: "Please enter the resource name."
  fullName: "Please enter the full name."
  description: "Please enter the description."
  contentType:
    message: "Please enter the content type."
    choices:
      - "text/plain"
      - "text/xml"
      - "text/html"
      - "text/css"
      - "text/javascript"
      - "application/json"
      - "application/xml"
      - "application/zip"
      - "application/pdf"
      - "image/gif"
      - "image/jpeg"
      - "image/png"
      - "image/svg+xml"
      - "image/tiff"
  cacheControl:
    message: "Please enter the cache control."
    choices:
      - "Public"
      - "Private"
    initial: "Public"
---

# `{{ inputs.resourceName }}.resource-meta.xml`

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<StaticResource xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{{ inputs.fullName }}</fullName>
    <description>{{ inputs.description }}</description>
    <contentType>{{ inputs.contentType }}</contentType>
    <cacheControl>{{ inputs.cacheControl }}</cacheControl>
</StaticResource>
```
