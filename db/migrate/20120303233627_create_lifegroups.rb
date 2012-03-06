class CreateLifegroups < ActiveRecord::Migration
  def self.up
    create_table :lifegroups do |t|
      t.string :title
      t.string :when
      t.string :location
      t.text :content

      t.timestamps
    end
  end

  def self.down
    drop_table :lifegroups
  end
end
