namespace backend.DTOs.TrackerComponent;

public class UpdateBaseDto
{
    public int Id { get; set; }

    public string Type { get; set; } = string.Empty;

    public string Name { get; set; } = string.Empty;

    public string Placeholder { get; set; } = string.Empty;

    public int Width { get; set; }

    public int X { get; set; }

    public int Y { get; set; }
}