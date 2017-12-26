from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from yeongram.users import models as user_models # 충돌 방지

# Create your models here.
@python_2_unicode_compatible
class TimeStapmedModel(models.Model):
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # 필드가 아닌 모든 것들
    class Meta:
        abstract = True

# 모델 A가 모델 B를 가리키고 있을 때, 모델 B는 set을 갖게 된다. 이는 모델 B를 가리키고 있는 모든 모델에 대한 세트가 된다.
@python_2_unicode_compatible
class Image(TimeStapmedModel):

    """ Image Model """
    
    # 필드는 어떤 종류의 정보를 저장하는 지 알려줌
    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, null=True, related_name='images')
    # comment_set # (LOOK IN ALL THE COMMENTS FOR THE ONES THAT HAVE 'IMAGE' = 1) # hidden field

    @property
    def like_count(self):
        return self.likes.all().count()

    @property
    def comment_count(self):
        return self.comments.all().count()

    def __str__(self):
        return '{} - {}'.format(self.location, self.caption)

    class Meta:
        ordering = ['-created_at']


@python_2_unicode_compatible
class Comment(TimeStapmedModel):

    """ Comment Model """

    message = models.TextField()
    creator = models.ForeignKey(user_models.User, null=True)
    image = models.ForeignKey(Image, null=True, related_name='comments')

    def __str__(self):
        return self.message
    

@python_2_unicode_compatible
class Like(TimeStapmedModel):

    """ Like Model """

    creator = models.ForeignKey(user_models.User, null=True)
    image = models.ForeignKey(Image, null=True, related_name='likes')

    def __str__(self):
        return 'User: {} - Image Caption: {}'.format(self.creator.username, self.image.caption)