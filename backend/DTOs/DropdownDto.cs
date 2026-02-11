namespace backend.DTOs;

public class DropdownDto : BaseComponentDto
{
    public ICollection<string> Options { get; set; } = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

}
