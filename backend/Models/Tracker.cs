namespace backend.Models;

public class Tracker : IBaseModel
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public List<TrackerBaseComponent> Components { get; set; } = [];

    public DateTime DateTimeCreated { get; set; }
}
