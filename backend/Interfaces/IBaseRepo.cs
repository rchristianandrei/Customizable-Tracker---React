using backend.Models;

namespace backend.Interfaces
{
    public interface IBaseRepo<T> where T : IBaseModel
    {
        void Create(T item);
        void Update(T item);
        bool Delete(T item);
        List<T> GetAll();
        T? GetById(int id);
    }
}