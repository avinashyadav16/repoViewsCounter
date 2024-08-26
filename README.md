# Repository Views Counter

![GitHub Views](https://repoviews.netlify.app/.netlify/functions/repoViews?file=README.md)

This project provides a simple way to track and display the number of views for a file in a GitHub repository. The view count is updated and displayed as a badge using a serverless function deployed on Netlify.

## Features

- **View Counter**: Track the number of views for any file in your repository.
- **Dynamic Badge**: Display the view count as a dynamic badge using the Shields.io API.
- **Serverless Function**: Leverages Netlify Functions to increment and retrieve the view count.

## How It Works

1. **File View Tracking**: The serverless function increments the view count each time the file is accessed.
2. **Shields.io Badge**: The view count is displayed as a badge on your GitHub repository's README.

## Setup Instructions

## Prerequisites

- A GitHub account with a repository where you want to track file views.

## Steps to Set Up

### Access the View Counter

The serverless function can be accessed via:

```bash
https://repoviews.netlify.app/.netlify/functions/repoViews?file=your_filename.extension
```

## Example Usage

To track views for README.md File:

```bash
![GitHub Repository Views](https://repoviews.netlify.app/.netlify/functions/repoViews?file=README.md)
```

The badge will automatically update as views are counted.
