import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room_sizes = [19, 20, 34];
  const classArray = [];

  for (const size of room_sizes) {
    classArr.push(new ClassRoom(size));
  }
  return classArr;
}
