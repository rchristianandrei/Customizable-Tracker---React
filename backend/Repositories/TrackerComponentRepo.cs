using backend.Interfaces;
using backend.Models;

namespace backend.Repositories;

public class TrackerComponentRepo : BaseRepo<BaseComponent>, ITrackerComponentRepo
{
    public List<BaseComponent> GetAllByTrackerId(int trackerId)
    {
        return list.FindAll(c => c.TrackerId == trackerId);
    }
}
