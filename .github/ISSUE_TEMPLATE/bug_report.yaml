name: Bug Report
title: "[BUG]"
description: Report a bug found in the application.
labels: bug

body:
  - type: markdown
    attributes:
      value: |
        ## Bug Report
        Please provide detailed information about the issue you encountered.

  - type: textarea
    id: bug-description
    attributes:
      label: Description of the bug
      description: A clear and concise description of what the bug is.
      placeholder: Describe the issue you are experiencing.
    validations:
      required: true

  - type: textarea
    id: steps-to-reproduce
    attributes:
      label: Steps to reproduce the bug
      description: Steps to reproduce the behavior.
      placeholder: "1. Go to '...'
                   2. Click on '...'
                   3. Scroll down to '...'
                   4. See error"
    validations:
      required: true

  - type: textarea
    id: expected-behaviour
    attributes:
      label: Expected behaviour
      description: A clear and concise description of what you expected to happen.
      placeholder: What did you expect the application to do?
    validations:
      required: false

  - type: input
    id: windows-version
    attributes:
      label: Windows version
      description: Which version of Windows are you using?
      placeholder: e.g., Windows 10 Pro 22H2
    validations:
      required: true

  - type: input
    id: app-version
    attributes:
      label: App version
      description: Which version of winscript are you using?
      placeholder: e.g., v1.2.2
    validations:
      required: true

  - type: dropdown
    id: browser
    attributes:
      label: If using a browser, which one?
      description: Select the browser you used (if applicable).
      options:
        - Not applicable
        - Google Chrome
        - Mozilla Firefox
        - Microsoft Edge
        - Other (please specify in description)
    validations:
      required: true

  - type: dropdown
    id: app-installation-type
    attributes:
      label: Is the app installed or portable?
      description: Specify how the app is being used.
      options:
        - Installed
        - Portable
    validations:
      required: true
