namespace backend.DTOs.Textbox;

public class TextboxDto : BaseComponentDto
{
    //public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public int MaxLength { get; set; }
}
