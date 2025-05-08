# Documentation

ChatGPT (and the LLMs) know language. Thus, they are good at creating text
for use in documentation.

## Architecture

### Ideation

> I want to create architecture documentation with definitions for contracts
> between the publishers and consumers of Micro Frontends. What should I
> include in the documentation?

### Word Lookup

As the models are trained with natural language, it is likely they are able
to help you find correct words and translations:

> What's the term for measuring the time a web page will take to be
> in a usable state?

Expected output: Time to interactive (TTI)

> What would be a valid translation for "viranomaispalvelu" in English when
> referring to an online service?

Expected output: government service

### Language Fine-tuning

> Improve the following:
>
> The portals and MFEs should aim to maximise the sharing of dependencies in
> order to minimise the loading time. It is possible that this approach
> might cause incompatibility issues in cases where applications expect a
> different version of a library than that provided for them through
> federation. Were such issues to rise, those should be shared among the
> frontend architecture group and, if considered severe enough, this
> strategy should be reconsidered or refined.

> Portals and MFEs should maximize dependency sharing to reduce loading
> times. However, this approach may lead to compatibility issues if
> applications require different library versions than those provided
> through federation. If such issues arise, they should be shared with the
> frontend architecture group. If deemed significant, the strategy should be
> reconsidered or refined.

### Ask for More!

If the response for any given prompt is not satisfactory, you do not 
necessarily have to rewrite the prompt, but can instead just ask for more 
ideas / options etc.: (TODO: is this relevant in this context?)

> 

## Code comments

