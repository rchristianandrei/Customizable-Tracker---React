using backend.DTOs.TrackerComponent;

namespace backend.DTOs.Tracker;

public class UpdateTrackerDto
{
    public string Name { get; set; } = string.Empty;

    public ICollection<UpdateBaseDto> Components { get; set; } = [];
}
