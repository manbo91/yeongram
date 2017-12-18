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


@python_2_unicode_compatible
class Image(TimeStapmedModel):

    """ Image Model """
    
    # 필드는 어떤 종류의 정보를 저장하는 지 알려줌
    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, null=True)

    def __str__(self):
        return '{} - {}'.format(self.location, self.caption)


@python_2_unicode_compatible
class Comment(TimeStapmedModel):

    """ Comment Model """

    message = models.TextField()
    creator = models.ForeignKey(user_models.User, null=True)
    image = models.ForeignKey(Image, null=True)

    def __str__(self):
        return self.message
    

@python_2_unicode_compatible
class Like(TimeStapmedModel):

    """ Like Model """

    creator = models.ForeignKey(user_models.User, null=True)
    image = models.ForeignKey(Image, null=True)

    def __str__(self):
        return 'User: {} - Image Caption: {}'.format(self.creator.username, self.image.caption)