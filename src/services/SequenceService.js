import { sequencerDB } from '@/db/sequencerDB.js';

class SequenceService {
  async saveSequence(id, pattern) {
    await sequencerDB.patterns.put({ id, pattern });
  }

  async loadSequence(id) {
    const sequence = await sequencerDB.patterns.get(id);
    return sequence ? sequence.pattern : null;
  }

  async deleteSequence(id) {
    await sequencerDB.patterns.delete(id);
  }

  async getAllSequences() {
    return await sequencerDB.patterns.toArray();
  }
}

const instance = new SequenceService();
Object.freeze(instance);

export default instance;

//event: { type: Object }, // Loop, Part, Pattern, Sequence, ToneEvent
