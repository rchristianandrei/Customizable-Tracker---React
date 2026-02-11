using backend.Models;

namespace backend.Interfaces;

public interface ITrackerRepo : IBaseRepo<Tracker>
{
    Task<Tracker?> GetByIdIncludeAll(int id);
}
