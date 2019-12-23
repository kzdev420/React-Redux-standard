This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## To Get Started

`node server`
Starts the dummy api server

`npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

`npm test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

## Challenge instructions

You will be building out a mock device insurance interface for our customer dashboard.

The challenge has three parts.

1. Go to the subscription pages by clicking on the subscriptions listed on the homepage. There is an existing link on that page to the insurance information page. Only one of the subscriptions has an insurance contract, the rest will show a mostly empty page.
  
  - We need to hide that link if the subscription has an existing insurance contract (endpoint: GET `insurance/contracts/`, with a query string filter of either `subscription` or `att_subscription` depending on which carrier the subscription belongs to)
  - We need to show a link to the plan selection page if the subscription is eligible to sign up (for sprint subscriptions: route `/s/subscriptions/:id/insurance/:sku/select-plan`. For AT&T subscriptions: `/a/subscriptions/:id/insurance/:sku/select-plan`. `:id` is the id of the subscription, `:sku` is the value of the `device_specs` attribute of the subscription.).
  - Eligibility for insurance has two criteria: a) the subscription has no existing contracts, and b) the sub's `sprint_status` or `att_status` is `active`.

2. We need to implement the select plan page. The mockup is provided as `select-plan.png`. The pricing and deductible information, along with plan IDs, are available at the endpoint `insurance/plans/`. Clicking the "Select" button should advance the user to the page described in part 3. Clicking the "back" arrow should return the user to the subscription page. All other links can be dummy links (`href="#"`).

3. We need to implement the plan selection confirmation page. It should look identical to the insurance information page (linked from the subscription pages), but the button should be labeled "Confirm Plan Selection", and clicking it should perform the following actions:
  - create contract (POST `insurance/contracts/`)
    pass `subscription` or `att_subscription` id params
  - create insured device (POST `insurance/devices/`)
    pass `contract` (the idea of the contract just created), `device_specs` (sometimes also called sku), `plan_type`
  - activate contract (POST `insurance/contracts/:contractId/activate/`)
  - redirect to the subscription page.
  - show a disappearing success message with the `Info` component in `/src/notifications/Info` and the `info` action in `/src/notifications/info.js`.
  (Please note the dummy api does not save any records)

## General comments

- Wing provides cell phone service by using the networks of other carriers. Every subscription, which is the equivalent of a phone line, uses either the Sprint or the AT&T network. Many endpoints and pages for the two networks are separate, but we do not necessarily expose that detail to users in the UI.

- All application routes that you will need are already set up with empty components in the `/src/screens` directory. You will find it useful to peruse the route configuration, however, at `/src/app/routes.js`. Feel free to inspect the dummy server at `/server/index.js` to help you understand the api calls that are allowed and expected. You will also find a few useful existing components in the `/src/common` directory.

- Please write tests for your sagas and component logic. However, rather than testing the components directly we recommend extracting the logic into functions and testing them separately.

- Please do your best to adhere to existing patterns and code style. Use two spaces as tabs. That said, we do not require linting and you will not be judged for missing semicolons and such.

- Please commit your changes with git, and use clear, complete commit messages.

- This is version 1.1 of this code challenge. If you have questions or have found a bug, please email rick@wingalpha.com.
