using backend.Models;

namespace backend.Repositories;

public class TextboxRepo : BaseRepo<TextboxComponent>
{
    public List<TextboxComponent> GetAllByTrackerId(int trackerId)
    {
        return list.FindAll(c => c.TrackerId == trackerId);
    }
}
