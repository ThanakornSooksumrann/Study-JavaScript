const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcements = finalParticipants.map((member) => {
  return member + " joined the contest.";
});

console.log(announcements);