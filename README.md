# Bro Day

**Is it Bro Day?** A single-page site that tells you—straight up.

## What is Bro Day?

Bro Day is **Thursday**. If it’s Thursday, the answer is **YES**. Otherwise, it’s **No**.

## Features

- **Thursday (Bro Day)**: A big, bold **YES** that fills the screen with a pink–purple gradient and subtle pulse animation
- **Other days**: A **No** (~3 inches) with a CMYK-style print effect—Cyan, Magenta, Yellow, and Black layers that drift slightly as if they can’t sit still

## Local development

Serve the site with any static server, for example:

```bash
python3 -m http.server 8765
```

Then open `http://localhost:8765` in your browser.

## Debug mode

Add `?debug=1` to the URL to flip the display (e.g., see **No** on Thursday or **YES** on other days) for testing.

## Tech

Plain HTML, CSS, and JavaScript. No build step, no frameworks.
