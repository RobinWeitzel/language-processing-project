
<h1 align="center">
  <br>
  Sarcasm Detection using Twitter Posts
  <br>
</h1>

<h4 align="center">Detecting sarcasm using Twitter posts with pictures.</h4>

First, to gather the tweets I wrote a NodeJS script that connects to the Twitter API.
The script can be deployed as a docker container and all the code can be found [here](https://github.com/RobinWeitzel/language-processing-project/tree/master/TwitterCrawler).

Next, I downloaded the images mentioned in the posts and resized them to 227x277 in this [notebook](https://github.com/RobinWeitzel/language-processing-project/blob/master/Image_downloader.ipynb).

I wrote a simple model to predict the sentiment score of text posts which can be found [here](https://github.com/RobinWeitzel/language-processing-project/blob/master/SimpleTextAnalysis.ipynb). I also wrote a more advanced mode which can be found [here](https://github.com/RobinWeitzel/language-processing-project/blob/master/AdvancedTextAnalysis.ipynb). This model was never run due to the hardware requirements and because the results from the simple model were good enough for a proof-of-concept.

With this out of the way I scored the downloaded tweets in this [notebook](https://github.com/RobinWeitzel/language-processing-project/blob/master/Scoring_tweets.ipynb).

Lastly, I predicted the sentiment of the pictures [here](https://github.com/RobinWeitzel/language-processing-project/blob/master/ImageSentiment.ipynb).

Check out my full write-up [here](https://github.com/RobinWeitzel/language-processing-project/blob/master/Report.pdf).