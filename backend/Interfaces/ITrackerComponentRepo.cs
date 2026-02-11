using backend.Models;

namespace backend.Interfaces;

public interface ITrackerComponentRepo : IBaseRepo<BaseComponent>
{
    List<BaseComponent> GetAllByTrackerId(int trackerId);
}
