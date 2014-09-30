class Post
  attr_accessor :title, :url, :filename, :date, :post
  def initialize(a, b, c)
    @title = a[-1].split(".")[0].tr("-", " ").split.map(&:capitalize).join(' ')
    @url = "/posts/#{a[-1].split(".")[0]}"
    @filename = a[-1]
    @date = b.mtime.to_date
    @post = c
  end


  #access posts, files within views/posts
  #title, content, url
  #read my list of post files
  #create an array of post objects
  #with the attributes set
  #Post.all => [post, post, post]

  def self.all
    Dir.glob("views/posts/*").collect do |filepath|
      a = filepath.split("/")
      b = filepath
      afile = File.open(filepath)
      c = File.read(filepath)
      Post.new(a, afile, c)
    end
  end
  #
  def read_post
      File.read("views#{@url}")
  end

end
