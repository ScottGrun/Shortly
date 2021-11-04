# Shorlty - A URL Shortener (Kind of)

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl). 

I started this project to learn more about how to implement authentication from scratch, previously in a professional setting I have worked with authentication but most of it was already built out. I felt this project would be a perfect refresher on authentication and building full-stack applications.
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [🧰 Built with](#built-with)
  - [💡 What I learned](#what-i-learned)
  - [Continued development](#continued-development)

# Overview

## The challenge

MVP - Users should be able to:

- ✔️ Without signing in shorten URLs as guest users
- ✔️ Sign in using magic links
- ✔️ Sign in using Github and Google as SSO providers
- ✔️ Sign in and be able to access their previously saved URLs
- ✔️ View which URLs they have shortened
- ✔️ Be able to actually use the shortened URLs by either sending them to friends or using them for themselves
- ✔️ Only allow valid URLs to be shortened


Extended Features - Users should be able to:

- 🔲 Animations
- 🔲 Allow users to delete their URLs

### Screenshot

![](./preview.jpg)

### Links

- Live Site URL: [Shortly](https://shortly-scottgrun.vercel.app)

## My process

I went with a mobile-first approach for building this app which worked nicely. I would build components out completely across all breakpoints before moving on to the next. I decided to build the guest version of the app first and then later added in the authentication which seemed to work well process-wise.

### 🧰 Built with

- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styling
- [Heroku Postgres](https://www.heroku.com/postgres) - Database
- [Prisma](https://www.prisma.io/) - Database ORM

## 💡 What I learned

### Why isn't this working? = Read the Docs, Check Github Issues, Check Stack Overflow

After this completing this project I feel I have a better grasp on how to effectively problem solve unknown issues, it is more than just reading the docs, you gotta check the docs, check Github issues, look at stack overflow, and **effectively read the error messages**.

I used [NextAuth](https://next-auth.js.org/) to implement the authentication and initially only skimmed over the documentation and felt like I had a handle on things. I first tried to get the Github SSO to work and I thought everything was going well except I had a funny error saying that the providerAccountId should be a string and not an int, see below:

```
Argument providerAccountId: Got invalid value 12345678 on prisma.findUniqueAccount. Provided Int, expected String.
```

 I kept scratching my head thinking what am I doing wrong here. I went over the docs again and again and it indeed said that the id should be a string I thought there must be something I am doing wrong here and I kept reviewing the docs despite reviewing them a hundred times at this point. Until finally by chance, I stumbled upon this [issue](https://github.com/nextauthjs/adapters/issues/111) in the NextAuth repo outlining that this is indeed a known problem for the Prisma adapter and would be fixed in later versions. I found a workaround in the thread and was able to get on with my day.

 **In a nutshell**, I learned that when your editor throws weird errors at you you need to tackle it from multiple angles just reading the docs again or thinking about it for a minute sometimes is not enough.

### SMTP Doesn't Need to Be Hard - Don't Reinvent the Wheel

At first, I was fairly daunted by the challenge of implementing magic links for authentication. First off I have never done it before, second, the previous work I did professionally that involved using SMTP was a headache.

However, I came across [Sendgrid](https://sendgrid.com/), and at first, I was hesitant to use it. I told myself that if I used an email service I wouldn't learn as much or have less control, etc, etc. However, after doing some reading online I came across a blog post that really laid out that you **don't always need to reinvent the wheel**. Meaning that sometimes using a service or package built specifically for a certain task can actually be better for a few reasons outlined below:

1. The service or code you are using has likely been battle-tested and will be more robust. Since these services/packages have thousands of users it means they likely have seen a ton of edge cases and accounted for them due to their large user base.

2. Stuff is already documented and usually documented thoroughly. Now I'm not saying documentation already being written should be a factor in choosing to write your own service or use an already existing one but it is definitely a factor. Thorough documentation written by somebody whose whole job is to do that will make the knowledge transfer to another dev that much easier.

4. It can **at times** be more feature-rich. Because the developers making these services or packages are likely solely focused on build these tools it is likely what they build is more feature-rich than what you make simply because they will have the time resources to do it. Whereas you are just building this to be used as part of another feature  - **granted** it also means that you could be bringing in more code than you need, there's always a tradeoff.

### File Organization & Component Naming is Important

I have to say that after completing this project I am not all happy with how I structured the project or organized/name the components. In the future, I plan to come back to this repo and clean things up. Good organization and naming takes a couple of seconds or minutes to think about but can end up saving you time and the headache of searching for components that are not effectively organized or named.

# Continued development

Moving forward I plan to restructure this app and rename some components to make things easier to find. I also plan on implementing an update and delete feature to make this a proper CRUD app.
