using backend.Interfaces;
using backend.Models;

namespace backend.Repositories;

public class TrackerComponentRepo : BaseRepo<TrackerBaseComponent>, ITrackerComponentRepo
{
    public List<TrackerBaseComponent> GetAllByTrackerId(int trackerId)
    {
        return list.FindAll(c => c.TrackerId == trackerId);
    }
}
