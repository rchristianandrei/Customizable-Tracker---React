using backend.Models;

namespace backend.Interfaces;

public interface ITrackerComponentRepo : IBaseRepo<TrackerBaseComponent>
{
    List<TrackerBaseComponent> GetAllByTrackerId(int trackerId);
}
