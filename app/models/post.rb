class Post < ActiveRecord::Base
    def self.search(search, page, order)
    paginate :per_page => 5, :page => page,
             :conditions => ['title like ?', "%#{search}%"],
             :order => order
  end

end
