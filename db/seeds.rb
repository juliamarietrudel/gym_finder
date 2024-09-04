gyms = [
  {
    name: "Shakty Rock Gym",
    address: "175 R. St Viateur Est, Montréal, QC H2T 1B4",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {
    name: "Allez Up - Mile End",
    address: "5600 Av. de Gaspé, Montréal, QC H2T 2A7",
    rating: 3
  },
  {
    name: "Allez Up - Pointe St-Charles",
    address: "1555 Rue Saint-Patrick, Montréal, QC H3K 2B7",
    rating: 4
  },
  {
    name: "Bloc Shop - Chabanel",
    address: "1370 Rue Chabanel O, Montréal, QC H4N 1H4",
    rating: 4
  },
  {
    name: "Bloc Shop - Mile-Ex",
    address: "6595 A Rue Saint-Urbain, Montréal, QC H2S 3G6",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Backbone",
    address: "100 Rue du Rubis, Bromont, QC J2L 0G2",
    rating: 4
  },
  {
    name: "Mouv'",
    address: " 3811 Rue Everett, Montréal, QC H2A 1S8",
    rating: 3
  }
]

gyms.each do |gym|
  g = Gym.new(
    name: gym[:name],
    address: gym[:address],
    rating: gym[:rating],
    description: gym[:description]
  )
  g.save
  puts "#{g.name} gym created!"
end
