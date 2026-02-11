namespace backend.DTOs.Tracker;

public class TrackerDto
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public ICollection<BaseComponentDto> Components { get; set; } = [];

    public DateTime DateTimeCreated { get; set; }
}
