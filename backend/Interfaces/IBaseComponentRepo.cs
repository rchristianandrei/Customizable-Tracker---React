using backend.Models;

namespace backend.Interfaces;

public interface IBaseComponentRepo<T> : IBaseRepo<T> where T : BaseComponent
{
    Task<List<T>> GetAllByTrackerId(int trackerId);
}