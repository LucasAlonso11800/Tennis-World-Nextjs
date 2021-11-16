import { model, models, Schema } from 'mongoose';

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    urlToImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ArticleModel = models.Article || model('Article', ArticleSchema);
export default ArticleModel;