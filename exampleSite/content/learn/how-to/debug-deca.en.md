---
title: Debug Deca
description: Deca provides a debug method to let you debug your website.
weight: 9999
---

# Debug Deca

Deca theme includes a debug system that helps you understand your website's structure, navigation, and content organization. This debug information is especially useful when configuring sidebars and troubleshooting layout issues.

<!-- more -->

## Enabling Debug Mode

To enable the debug sidebar, you need to set the `HUGO_DEBUG_SIDEBAR` environment variable to `true` when running Hugo.

{{< tabs >}}

  {{< tab label="macOS/Linux" >}}

  ```bash
  # Set environment variable and run Hugo server
  export HUGO_DEBUG_SIDEBAR=true
  hugo server
  ```

  Or run in a single command:

  ```bash
  HUGO_DEBUG_SIDEBAR=true hugo server
  ```

  {{< /tab >}}

  {{< tab label="Windows (PowerShell)" >}}

  ```powershell
  # Set environment variable and run Hugo server
  $env:HUGO_DEBUG_SIDEBAR="true"
  hugo server
  ```

  Or run in a single command:

  ```powershell
  $env:HUGO_DEBUG_SIDEBAR="true"; hugo server
  ```

  {{< /tab >}}

  {{< tab label="Windows (Command Prompt)" >}}

  ```cmd
  # Set environment variable and run Hugo server
  set HUGO_DEBUG_SIDEBAR=true
  hugo server
  ```

  Or run in a single command:

  ```cmd
  set HUGO_DEBUG_SIDEBAR=true && hugo server
  ```

  {{< /tab >}}

{{< /tabs >}}

## Understanding the Debug Output

### Sidebar Configuration

The debug panel shows which sidebar configuration is active for the current page. This helps you verify that the correct sidebar is being applied based on your `config.toml` settings.

### Page Navigation

The Previous/Next links show you how pages are connected in the sidebar navigation, which is crucial for understanding user flow through your documentation.

### Content Organization

The flat and tree structures help you visualize how your content is organized and whether the hierarchy matches your expectations.

## Troubleshooting Common Issues

### Sidebar Not Showing

If your sidebar isn't displaying correctly:

1. Check that the page is in the correct section
2. Verify the sidebar configuration in your config file

### Navigation Order Issues

If pages appear in the wrong order:

1. Check the `weight` parameter in front matter
2. Verify file naming conventions
3. Review the flat structure in debug mode

### Missing Pages

If pages don't appear in the sidebar:

1. Confirm the page is published (`draft: false`)
2. Check that the page is in the correct content directory
3. Verify the sidebar section configuration

## Disabling Debug Mode

To disable debug mode, simply remove or set the environment variable to `false`:

{{< tabs >}}

  {{< tab label="macOS/Linux" >}}

  ```bash
  # Remove the environment variable
  unset HUGO_DEBUG_SIDEBAR

  # Or set it to false
  export HUGO_DEBUG_SIDEBAR=false
  hugo server
  ```

  {{< /tab >}}

  {{< tab label="Windows (PowerShell)" >}}

  ```powershell
  # Remove the environment variable
  Remove-Item Env:HUGO_DEBUG_SIDEBAR

  # Or set it to false
  $env:HUGO_DEBUG_SIDEBAR="false"
  hugo server
  ```

  {{< /tab >}}

  {{< tab label="Windows (Command Prompt)" >}}

  ```cmd
  # Set it to false
  set HUGO_DEBUG_SIDEBAR=false
  hugo server
  ```

  {{< /tab >}}

{{< /tabs >}}
