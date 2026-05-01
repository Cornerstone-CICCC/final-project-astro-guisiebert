**Live site:**

# My Reflection

- Astro feels super quick and performant. Works super well in dev environment.
- Loved using a base layout and easy to create components for reusability (ProductCard and ProductGrid)
- Also easy to add JS when needed (using Astro Islands). I used it for the filters in the home page and for the "Add to bag" button in the products page.
- Loved the way it handles routing with pages and folders. The project looks super organized.
- I used dynamic routes via `[slug].astro` with `getStaticPaths()`
  - This works because all slugs are already globally unique, so categories aren't needed in the url for a catalog of this size

- The cool thing is that adding a new product to `products.json` automatically generates a new page. no code changes required.
