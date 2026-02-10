using backend.Interfaces;
using backend.Models;

namespace backend.Repositories;

public abstract class BaseRepo<T> : IBaseRepo<T> where T : IBaseModel
{
    protected static readonly List<T> list = [];

    public List<T> GetAll()
    {
        return list;
    }

    public T? GetById(int id)
    {
        return list.Find((t) => t.Id == id);
    }

    public void Create(T item)
    {
        item.Id = list.Count + 1;
        list.Add(item);
    }

    public void Update(T item)
    {

    }

    public bool Delete(T item)
    {
        return list.Remove(item);
    }
}
