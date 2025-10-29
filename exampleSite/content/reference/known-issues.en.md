---
title: Known Issues
description: Known issues of Deca 
weight: 1000
---

# Known Issues

These issues will not be fixed for the time being. For details, see [Why Not Deca](blog/create-deca/#why-not-deca). However, they are documented here for reference.

1. The mobile toggle "Contents" tab is not updated by Swup.
2. Some layouts are not consistent between Swup and the original HTML.
3. Section pages without a table of contents are incorrectly assigned one by `toc.js`.
4. CSS should be standardized to ensure consistent item positioning across different page types.
5. A better method is needed to handle interactions between conditionally loaded HTML and Swup, for example, the `hasShortCode` method.
6. `sidebar.html` should be rendered in a more Hugo-native way.
7. A JavaScript file is needed to automatically collapse the sidebar menu. See [performance bottleneck](blog/create-deca/#performance-bottle-neck).
