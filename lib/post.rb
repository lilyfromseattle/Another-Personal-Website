class Post
  attr_accessor :title, :url, :filename, :date, :post, :written_date, :written_title, :text
  def initialize(a, b, c, d, t, ft)
    @title = a[-1].split(".")[0].tr("-", " ").split.map(&:capitalize).join(' ')
    @url = "/posts/#{a[-1].split(".")[0]}"
    @filename = a[-1]
    @date = b.mtime.to_date
    @post = c
    @written_date = d
    @written_title = t
    @text = ft
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
      d = IO.readlines(filepath)[0]
      t = IO.readlines(filepath)[2]
      ft = IO.readlines(filepath)[4]
      Post.new(a, afile, c, d, t, ft)
    end
  end
  #

  # def sort_all_posts
  #   @all_posts = @all_posts.sort_by(date).reverse
  #   @all
  # end

  def read_post
      File.read("views#{@url}")
  end
  #
  # def make_written_date
  #   date.split(/-/)
  #
  #   "#{month} #{day}, #{year}"
  # end

end
