from django.conf.urls import url
from . import views

urlpatterns = [
    url(
        regex=r'^$',
        view=views.Feed.as_view(),
        name='all_images'
    ),
    url(
        regex=r'(?P<image_id>[0-9]+)/like/',
        view=views.LikeImage.as_view(),
        name='like_image'
    ),
    url(
        regex=r'(?P<image_id>[0-9]+)/comment/',
        view=views.CommentOnImage.as_view(),
        name='comment_image'
    ),
]

# 이미지 좋아요
# /images/3/like/
# /images/5/unlike/

# 0. create the url and the view
# 1. take the id from the url
# 2. we want to find an image with this id
# 3. we want to create a like for that image