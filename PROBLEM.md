# Almedia Backend Coding Challenge

Thanks so much for your interest in working at Almedia as a Backend Engineer! Below is a challenge we'd like you to do. It’s meant to test both your dev skills (clean and well structured code) and to see also how well we’ll be able to work together.

The challenge should take about 2 hours to complete.

---

Our application has an offer job that fetches offers by HTTP requests from different offer networks (providers). The response payload is different for each provider, but we transform and store all offers into one database table. Please provide an approach to validate and transform all response payloads into the same type of object by using NestJS DTOs, and decorators. For when validation does not pass for one offer, please skip the offer, print a warning, and continue with the other offers of the provider.

In the link below is our offers entity class and a couple of response payloads.

You can use the *.payload.ts files data as constant variables to not waste time on making requests. 

The goal is to convert different types of payloads into one entity and to also validate the payload data. When checking the challenge code we will specifically look for well structured code that can scale and handle multiple (20+) offer providers in a clean way.

https://gitlab.com/-/snippets/2385560
