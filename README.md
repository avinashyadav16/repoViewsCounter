# Repository Views Counter

![GitHub Views](https://repoviews.netlify.app/.netlify/functions/repoViews?repo=https://github.com/avinashyadav16/repoViewsCounter)

This project provides a simple and effective way to track and display the number of views for a GitHub repository. The view count is automatically updated and shown as a badge using a serverless function deployed on Netlify.

## Features

- **View Counter**: Track the number of views for any repository in your GitHub Profile.
- **Dynamic Badge**: Display the view count as a dynamic badge using the Shields.io API.
- **Serverless Function**: Leverages Netlify Functions to increment and retrieve the view count.

## How It Works

1. **File View Tracking**: The serverless function increments the view count each time the repository URL is accessed.
2. **Shields.io Badge**: The current view count is displayed as a badge on your GitHub repository's README.

## Setup Instructions

## Prerequisites

- A GitHub account with a repository where you want to track views.

## Steps to Set Up

### Access the View Counter

1. Use the following URL format to track views for a specific GitHub repository:

```bash
https://repoviews.netlify.app/.netlify/functions/repoViews?repo=https://github.com/your_username/your_repository
```

2. Add the Badge to Your README: To display the view count for your repository, use the following markdown in your README:

```bash
![GitHub Repository Views](https://repoviews.netlify.app/.netlify/functions/repoViews?repo=https://github.com/your_username/your_repository)
```

    Replace your_username/your_repository with the appropriate values for your repository.

## Example Usage

To track and display views for the `repoViewsCounter` repository:

```bash
![GitHub Repository Views](https://repoviews.netlify.app/.netlify/functions/repoViews?repo=https://github.com/avinashyadav16/repoViewsCounter)
```

The badge will automatically update as views are counted.
