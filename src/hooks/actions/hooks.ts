import { RealmService } from '../../storage/realm';
import { ActionModel, ActionSchema } from '../../storage/actions/schema';

export function getActions(filterType: string, limit?: number, interval?: { start?: Date, end?: Date }) {
  const actions = RealmService.realmInstance.objects<ActionModel>(
    ActionSchema.name
  );
  let query = `type = "${filterType}" SORT(date DESC)`;
  if (limit) query += ` LIMIT(${limit})`;
  let result = actions.filtered(query);
  if (interval) {
    if (interval.start) result = result.filtered('date >= $0', interval.start);
    if (interval.end) result = result.filtered('date <= $0', interval.end);
  }
  return result;
}
