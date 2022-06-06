# Crypto-Calculator
An easy way to see real-time exchange rates for Crypto and Fiat currencies.
#### Site Demo: https://crypto-calculator-nine.vercel.app/

##

### Inspiration:
Starting the first week of this fellowship with Solana, and being quite new to Solana Development, it has been an exciting rush of knowledge for the both of us! We got paired with a Solana ecosystem company called [Vyper Protocol](https://www.vyperprotocol.io/), being the "first permissionless tranching protocol on Solana". 

Having to base our Orientation Hackathon project on Vyper Protocol, we thought, "what could we create that is useful, intuitive, and could help Vyper Protocol/DeFi users?". So with our big brains and bright starry eyes, we came up with a Solana Token Exchange Calculator! 

### What it does:
It allows the user to compare two different tokens that exist on the Solana Blockchain, and see the exchange rates for a given amount of tokens. Displaying the results in real-time, with features such as switching the tokens inputted, alerts for invalid inputs, and of course, nightmode.

### How we built it:
We used **NextJS**, **Typescript**, **React** as the core of the frontend, with **TailwindCSS** and **DaisyUI** for styling and styled components. Using the **CoingGecko API** as the backend/database, using Axios to fetch the data of Solana Blockchain tokens. Running the app using CD/CI with **Vercel** linking to our _Main_ branch on **Github**. Most of the wireframing and planning was done using **Figma** and **Google Docs**

### Challenges we ran into:
The biggest challenge we ran into was trying to find an API to use. It was a long journey finding one that had the Solana Tokens available, didn't have a strict rate-limit, and covered all our use-cases. 

Thankfully the CoinGecko API fulfilled all those conditions, while allowing the data to be easy-to-read and simple to use! 

### Accomplishments that we're proud of:
We were able to create a project by challenging ourselves and using new technology, tools, and frameworks to get more comfortable with them. Also, being able to work past a time zone difference of 9+ hours, and having very smooth line of communication the entire time. Having several productive meetings to wireframe and brainstorm the project, we felt like no time was wasted.

### What we learned:
We both got more practice with the technologies we'll be using for the rest of the fellowship. Mainly **Typescript**, **NextJS**, and **TailwindCSS**, feeling a boost to our confidence and skills as developers. Also, getting comfortable with different keywords/terms in the Web3 space (eg. Tokens, Serum).

### What's next for Solana Tokens Exchange Calculator:
Being quite simple for now, we'd like to make it have more features such as:
- The ability to switch from Solana Blockchain tokens to the main coins of Crypto (e.g BTC, ETH, SOL)
- Adding a search function for the input fields for the expanded database
- Exchange rates for different staking/lending protocols
- A _Stats_ section to show more information for each token

<br/>
<br/>

# NextJS & Vercel Boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
